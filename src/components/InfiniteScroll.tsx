import { Divider } from "antd";
import { ReactNode, forwardRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface IUInfintieScrollProps {
  child: ReactNode;
  data: Array<unknown>;
  height?: `${number}vh`;
}

const UInfiniteScroll = forwardRef<HTMLDivElement, IUInfintieScrollProps>(
  ({ child, data, height }, ref) => {
    console.log("Scroll bar rerender", data.length);
    const loadMoreData = () => {};
    return (
      <div
        ref={ref}
        id="scrollableDiv"
        className="hideScrollbar"
        style={{
          height: height || "68vh",
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
  }
);

export default UInfiniteScroll;
