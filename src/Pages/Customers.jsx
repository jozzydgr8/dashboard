import { Table } from "antd";
import moment from "moment";
import { normalUserAcquisitions } from "../UsersData";

export const Customers = () => {
    const sortedData = [...normalUserAcquisitions].sort(
        (a, b) => moment(b.date).diff(moment(a.date))
    );

    const columns = [
        {
            key: "1",
            title: "Date",
            dataIndex: "date",
            render: (text) => {
                const date = moment(text).startOf('day');
                const now = moment().startOf('day');
                
                return date.isBefore(now) 
                    ? date.from(now) 
                    : now.from(date); 
            },
            sorter: (a, b) => moment(a.date).diff(moment(b.date)) 
        },
        {
            key: "2",
            title: "Users Joined",
            dataIndex: "newUsers",
            sorter: (a, b) => a.newUsers - b.newUsers 
        },
        {
            key: "3",
            title: "Total Users",
            dataIndex: "totalUsers",
            
        }
    ];

    return (
        <section>
            <div className="container-fluid">
                <Table
                    dataSource={sortedData} 
                    columns={columns}
                    rowKey={(record) => record.date}
                />
            </div>
        </section>
    );
};
