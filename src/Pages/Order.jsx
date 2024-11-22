import { Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Order.css";  // Import a custom CSS file for the row styling

export const Order = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();
  const handleNavigate = (record)=>{
    navigate(`/dashboard/${record.id}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (data.ok) {
        const json = await data.json();
        setDataSource(json);
      } else {
        console.log(data);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
    },
    {
      key: "3",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "4",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => (
        <p>{completed ? "Completed" : "In Progress"}</p>
      ),
    },
  ];

  // Apply a CSS class to each row based on the "completed" status
  const rowClassName = (record) => {
    return record.completed ? "completed-row" : "in-progress-row";
  };

  return (
    <section>
      <div className="container-fluid">
        
        <Table
          columns={columns}
          dataSource={dataSource}
          rowClassName={rowClassName}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "100%" }}  
          onRow={(record)=>({
            onClick:()=>{handleNavigate(record)}
        })}
        />
      </div>
    </section>
  );
};
