import Accordion from "./../components/Accordion";

const questions = [
  {
    question: "What is this system used for",
    answer:
      "This system is used for archiving Salahaddin's University Senior Students' Graduation Projects and Researches",
  },
];

const FAQ = () => {
  return (
    <>
      <h2 className="h2 text-center p-5" id="faq">
        Frequently Asked Questions (FAQ)
      </h2>
      <Accordion questions={questions} />
    </>
  );
};

export default FAQ;
