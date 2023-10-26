import React, { useState, useEffect } from 'react'
import { Card, Divider } from 'antd';

const HMIWrapper = (props) => {

    let ContentList = {}
    const TabLabel = []

    const HtmlWrapper = (Tag) => {

        // console.log(Tag);
        return (
            <div style={{ width: '100%', height: '100%', borderRadius: 15, }}>
                {props.children.find( ({ key }) => key === `${Tag}` )}
            </div>
        )
    }

    props.Tab.forEach(element => {
        let TagBuffer = {
            key: element,
            tab: element,
        }
        TabLabel.push(TagBuffer)
        // console.log(element);
        ContentList[element] = HtmlWrapper(element)
    })

    const [tabkey, settabkey] = useState(TabLabel[0].key)

    const onTabChange = (key) => {
        console.log(key);
        settabkey(key)
    }

    return (
        <div>
            {/* <Divider orientation="left">Schemetic View</Divider> */}
            <div style={{ paddingTop: '0px' }}>
                <Card bordered={false}
                    style={{ borderRadius: 0, width: '100%' }} hoverable={false}
                    tabList={TabLabel}
                    bodyStyle={{ padding: "0px" }}
                    headStyle={{ backgroundColor: '#c7bcbb', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                    activeTabKey={tabkey}
                    onTabChange={key => {
                        onTabChange(key);
                    }}
                >
                    {ContentList[tabkey]}
                </Card>
            </div>
        </div>
    )
}

export default HMIWrapper
