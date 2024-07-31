import { useLocation, useSearchParams, useParams } from "react-router-dom";
import { Button } from "antd";

function RouterTest() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const Params = useParams();
  console.log("location", location);
  // console.log("searchParams", searchParams.get('name'));
  // console.log("Params", Params)
  return (
    <div>
      <h1>Router Test</h1>
      <p>Check the console for the route information</p>
      <Button href="https://juejin.cn/post/7187199524903845946#heading-16" type="link">参考教程</Button>
    </div>
  );
}

export default RouterTest;