import { render, screen } from "@testing-library/react";
import App from "./App";
import Cards from "./components/Cards";
import Card from "./components/Card";

test("App rendered", () => {
  render(<App />);
  const linkElement = screen.getByText(/Performance Series/i);
  expect(linkElement).toBeInTheDocument();
});
test("Cards rendered", () => {
  render(<Cards />);
  const linkElement = screen.getByText(/Performance Series/i);
  expect(linkElement).toBeInTheDocument();
});
test("Card rendered", () => {
  const data = {
    headerImg: "/images/lake-inniscarra-thumb.jpg",
    thumbnail: "/images/lake-inniscarra-trainer.jpg",
    title: "Performance Series",
    time: "30:53",
    distance: "6,248 MF",
    CTA: "/",
  };
  render(<Card cardDetail={data} index={1} />);
  const linkElement = screen.getByText(/Performance Series/i);
  expect(linkElement).toBeInTheDocument();
});
