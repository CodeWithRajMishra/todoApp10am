import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';

const MyCart=()=>{
    const cartData= useSelector((state)=>state.myproduct.cart);



    const MyData=cartData.map((key)=>{
        return(
            <>
              <tr>
                <td> <img src={key.images} width="100" height="100" /></td>
                <td>{key.name}</td>
                <td>{key.desc}</td>
                <td>{key.cate}</td>
                <td>{key.price}</td>
              </tr>
            </>
        )
    })


    return(
        <>
          <h1> Our Products </h1>   

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Decription</th>
          <th>Category</th>
          <th> Price </th>
        </tr>
      </thead>
      <tbody>
          {MyData}
        </tbody>
        </Table>     
        </>
    )
}

export default MyCart;