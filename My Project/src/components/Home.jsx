import { useSelector } from "react-redux";
import Nav from "./Nav";
function Home() {
  const count = useSelector((state) => state.checkout)

  return (
      <>
      <Nav/>
        {/* <table>
          <tbody>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>

          </tr>
          </tbody>
          {
            count.products.map(item=>(
              <tbody key={item.id}>
              <tr >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price_p_m}</td>
              </tr>
              </tbody>
            ))
          }
        </table> */}
      </>
  );
}

export default Home;
