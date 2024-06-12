import { Avatar, Card, List } from "antd";
import { SearchProps } from "antd/es/input";
import Search from "antd/es/input/Search";
import UInfiniteScroll from "../../components/InfiniteScroll";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const ContactList: React.FC = () => {
  const renderHeader = () => {
    const onSearch: SearchProps["onSearch"] = (value) => {
      console.log("search...", value);
    };
    return (
      <Search
        placeholder="Search Contact"
        onSearch={onSearch}
        allowClear
        style={{ width: 300 }}
      />
    );
  };

  return (
    <Card title={"Recent Chats"} extra={renderHeader()}>
      <UInfiniteScroll
        data={data}
        child={
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        }
      />
    </Card>
  );
};

export default ContactList;

// const listStyle: CSSProperties = {
//   height: "80vh",
//   background: "red",
// };
