import InnerGreeting, { type InnerGreetingProps } from "./inner-greeting";

/**
 * Komponen perantara tingkat tengah yang hanya meneruskan `userName` ke {@link InnerGreeting}.
 *
 * @param props Props yang diteruskan dari komponen induk.
 * @returns Pembungkus komponen tingkat tengah.
 */
const MiddleSection = ({ userName }: InnerGreetingProps) => {
  return <InnerGreeting userName={userName} />;
};

export default MiddleSection;
