import { Footer } from "./components/Footer";
import { AddComment } from "./components/AddComment";
import { Comments } from "./components/Comments";
import { useDispatch } from "react-redux";
import { changeWitdh } from "./redux/windowSlice";


function App() {
  const dispatch = useDispatch()

  window.addEventListener("resize", () => {
      dispatch(changeWitdh(window.innerWidth));
  });

  return (
    <>
      <Comments/>
      <AddComment/>
      <Footer />
    </>
  )
}

export default App
