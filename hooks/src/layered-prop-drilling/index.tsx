import OuterSection from "./components/outer-section";

/**
 * Mendemonstrasikan fenomena Prop Drilling (`App -> OuterSection -> MiddleSection -> InnerGreeting`)
 * sebagai latar belakang mengapa React Context dibutuhkan untuk data lintas-lapisan.
 *
 * @returns Halaman ilustrasi prop drilling.
 */
const LayeredPropDrilling = () => {
  const activeUserName = "Anmastery";

  return (
    <main>
      <h1>Layered Prop Drilling</h1>
      <OuterSection userName={activeUserName} />
    </main>
  );
};

export default LayeredPropDrilling;
