import { Button, Input, Table } from "antd"
import {merchantData} from '../UsersData';
import moment from "moment";
import { SearchOutlined } from "@ant-design/icons";

export const Merchant = ()=>{
    const sortedData = [...merchantData].sort(
        (a, b) => moment(b.date).diff(moment(a.date))
    );
    const columns =[
        {
            key:"1",
            title:'id',
            dataIndex:'merchantId',
        },
        {
            key:"2",
            title:'Merchant Name',
            dataIndex: 'name',
            filterDropdown : ({setSelectedKeys, selectedKeys, confirm, clearFilters})=>{
                return (
                    <>
                <Input
                autoFocus
                 placeholder="Search merchant here"
                 value={selectedKeys[0]}
                 onChange={e=>{
                    setSelectedKeys(e.target.value?[e.target.value]:[])
                 }}
                 onPressEnter={()=>{
                    confirm()
                 }}
                 onBlur={()=>{
                    confirm()
                 }}
                 ></Input>
                 <Button onClick={()=>{confirm()}} type="primary">Search</Button>
                 <Button onClick={()=>{clearFilters()}} type="primary">Reset</Button>
                 </>
                )
            },
            filterIcon: ()=>{
                return <SearchOutlined />
            },
            onFilter:(value, record)=>{
                return record.name.toLowerCase().includes(value.toLowerCase())
            },
        },
        {
            key:'3',
            title:'Date Joined',
            dataIndex:'joinDate',
            
        },
        {
            key:'4',
            title:'total transactions',
            dataIndex:'transactions',
            sorter: (a, b) => a.transactions - b.transactions
        },
        {
            key:'5',
            title:"Engagement Level",
            dataIndex:'engagementLevel',
            filters:[
                {text:'High',value:"High"},
                {text:'Low', value:'Low'},
                {text:'Medium', value:'Medium'}
            ],
            onFilter:(value, record)=>{
                return record.engagementLevel === value
            }
        }
    ]
    return (
        <section>
            <div className="container-fluid">
                <Table
                dataSource={sortedData}
                columns={columns}
                />
            </div>
        </section>
    )
}