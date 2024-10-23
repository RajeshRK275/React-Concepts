import { useParams } from "react-router";

export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <h2>Products</h2>
      <h4>Showing Product with Id {id}</h4>
    </div>
  );
}
