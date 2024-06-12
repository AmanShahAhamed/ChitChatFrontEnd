import { Divider } from "antd";
import { ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface IUInfintieScrollProps {
  child: ReactNode;
  data: { title: string }[];
}

const UInfiniteScroll: React.FC<IUInfintieScrollProps> = ({ child, data }) => {
  const loadMoreData = () => {};
  return (
    <div
      id="scrollableDiv"
      className="hideScrollbar"
      style={{
        height: "68vh",
        overflow: "auto",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={null}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        {child}
      </InfiniteScroll>
    </div>
  );
};

export default UInfiniteScroll;
