import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Selected Work",
};

export const WorkPage = () => {
  return (
    <section>
      <h1>Selected work</h1>
      <p>
        Engineering thoughtful interfaces and
        the systems behind them.
      </p>
    </section>
  );
}

export default WorkPage;