import React, { useEffect, useState } from 'react';
import { Card, Typography, Divider, Tag } from 'antd';
import { Request_Realtime_PDM } from '../../../api';
import { sortRealtimeData } from '../../../DataRequest/UtilityProcess';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const { Title, Text } = Typography;

const getColorByThreshold = (value) => {
  if (value >= 66) return '#52c41a'; // green
  if (value >= 33) return '#faad14'; // yellow
  return '#ff4d4f'; // red
};

const getShortLabel = (name) => {
  if (name.includes('X-axis')) return 'X';
  if (name.includes('Y-axis')) return 'Y';
  if (name.includes('Z-axis')) return 'Z';
  if (name.includes('Temperature')) return '🌡️ Temp';
  if (name.includes('Overall')) return '📊 Overall';
  if (name.includes('Current')) return '⚡ Current';
  return name;
};

const MiniBarChart = ({ data }) => {
  const entries = Object.entries(data).sort(([a], [b]) => {
    if (a === 'Overall_TKPI') return -1;
    if (b === 'Overall_TKPI') return 1;
    return 0;
  });

  const chartData = entries.map(([name, value]) => ({
    name: getShortLabel(name),
    value: parseFloat(value),
  }));

  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart layout="vertical" data={chartData}>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" width={90} stroke="#aaa" />
        <RechartsTooltip />
        <Bar dataKey="value">
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getColorByThreshold(entry.value)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const Dashboard4 = () => {
  const [data, setData] = useState({});

  const request_realtime = async () => {
    const response_quantity = await Request_Realtime_PDM([
      'Overall_TKPI',
      'Current-TKPI',
      'Temperature-TKPI',
      'X-axis vibration speed-TKPI',
      'Y-axis vibration speed-TKPI',
      'Z-axis vibration speed-TKPI',
    ]);
    const sorted_realtime = sortRealtimeData(response_quantity.data);
    setData(sorted_realtime);
  };

  useEffect(() => {
    request_realtime();
  }, []);

  const formatDateTimeMY = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString('en-MY', {
      timeZone: 'Asia/Kuala_Lumpur',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const renderOverallTag = (value) => {
    const num = parseFloat(value);
    const color = getColorByThreshold(num);
    let label = 'Critical';
    if (num >= 66) label = 'Normal';
    else if (num >= 33) label = 'Warning';

    return (
      <Tag color={color} style={{ fontSize: 16, padding: '4px 12px' }}>
        Overall: {num.toFixed(2)}% - {label}
      </Tag>
    );
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      {Object.entries(data).map(([line, assets]) => (
        <Card
          key={line}
          title={<div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>📦 Line: {line}</div>}
          style={{ marginBottom: 24, backgroundColor: '#1f1f1f', borderColor: '#333', overflow: 'hidden' }}
          headStyle={{ backgroundColor: '#141414', borderBottom: '1px solid #333', padding: '12px 24px', minHeight: '48px' }}
          bodyStyle={{ padding: 0 }}
        >
          <div style={{ overflowX: 'hidden', width: '100%' }}>
            <div className="scrolling-wrapper" style={{ display: 'flex', gap: '16px', minWidth: '100%', padding: '12px', animation: 'scroll-left 30s linear infinite' }}>
              {Object.entries(assets).map(([assetName, assetData]) => {
                if (typeof assetData !== 'object') return null;

                const { Lastupdate, ...parameters } = assetData;
                const overallValue = parameters['Overall_TKPI'];

                // Sort parameters to bring Overall_KPI to top
                const orderedEntries = Object.entries(parameters).sort(([a], [b]) => {
                  if (a === 'Overall_TKPI') return -1;
                  if (b === 'Overall_TKPI') return 1;
                  return 0;
                });

                return (
                  <div key={assetName} style={{ minWidth: 520 }}>
                    <Card
                      size="small"
                      bordered
                      hoverable
                      style={{
                        height: 400,
                        backgroundColor: '#141414',
                        borderColor: '#333',
                      }}
                      headStyle={{
                        borderBottom: '1px solid #333',
                        padding: '16px 24px',
                        minHeight: '60px',
                      }}
                      title={
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Title level={4} style={{ color: '#fff', margin: 0 }}>{assetName}</Title>
                          {overallValue && renderOverallTag(overallValue)}
                        </div>
                      }
                    >
                      <div style={{ display: 'flex', width: '100%', gap: '16px' }}>
                        <div style={{ width: '50%' }}>
                          <Divider style={{ borderColor: '#333', color: '#888' }} orientation="left" plain>
                            📊 Parameters
                          </Divider>
                          {orderedEntries.map(([key, val]) => (
                            <div key={key} style={{ marginBottom: 8 }}>
                              <Text type="secondary" style={{ color: '#bbb' }}>
                                {key.replace(/[-_]?TKPI/g, ' KPI')}:
                              </Text>
                              <span style={{ marginLeft: 8 }}>
                                <Text strong style={{ color: getColorByThreshold(parseFloat(val)) }}>
                                  {parseFloat(val).toFixed(2)}%
                                </Text>
                              </span>
                            </div>
                          ))}
                        </div>
                        <div style={{ width: '50%' }}>
                          <Divider style={{ borderColor: '#333', color: '#888' }} orientation="left" plain>
                            📈 Chart
                          </Divider>
                          <MiniBarChart data={parameters} />
                        </div>
                      </div>
                      <div>
                        <Divider style={{ margin: '8px 0', borderColor: '#333' }} />
                        <Text type="secondary" style={{ fontSize: 12, color: '#aaa' }}>
                          ⏱ Last Updated: <span style={{ color: '#ffd666' }}>{formatDateTimeMY(Lastupdate)}</span>
                        </Text>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      ))}
      <style>{`
        .scrolling-wrapper {
          animation-delay: 0s;
          scrollbar-width: none;
        }

        .scrolling-wrapper::-webkit-scrollbar {
          display: none;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Dashboard4;
