import "./App.css";
import { Accordion } from "./Accordion/Accordion";

const faqList = [
  {
    q: "Lorem ipsum dolor sit amet",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus cumque officiis, tempora ipsa a.",
  },
  {
    q: "Lorem ipsum dolor sit amet edo bere",
    a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
  },
  {
    q: "Lorem cotun cedas sit amet wer bere",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Lorem ipsum dolor sit amet edo bere",
    a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
  },
  {
    q: "Lorem cotun cedas sit amet wer bere",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
];

function App() {
  return <Accordion faqList={faqList} />;
}

export default App;
