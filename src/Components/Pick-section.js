import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import spock from "../images/icon-spock.svg";
import lizard from "../images/icon-lizard.svg";
import triangle from "../images/bg-triangle.svg";
import pentagon from "../images/bg-pentagon.svg";
import Button, { Button2 } from "./Game-btn";

const Pick = ({ handleClick, play, level }) => {
  return (
    <section
      style={{ display: play && "none" }}
      className="w-full flex flex-col items-center justify-center">
      <div
        style={{ display: level === 1 && "flex" }}
        className="relative hidden justify-center items-center mt-16 w-full sm:w-[400px] md:w-[600px] lg:mt-36">
        <div className="level-text absolute top-16  text-3xl font-bold border-b-2 border-white md:text-4xl">
          <h2>Level {level}</h2>
        </div>
        <img className=" w-60 md:w-auto" src={triangle} alt="triangle" />

        <div className="absolute -top-10 left-6 md:-top-28 md:left-12 Btn-hover transition duration-300 ">
          <Button
            img={paper}
            color="hsl(230, 89%, 65%)"
            shadow="hsl(230, 89%, 65%, 0.7)"
            handleClick={() => {
              handleClick("paper");
            }}
          />
        </div>
        <div className="absolute -top-10 right-6 md:-top-28 md:right-12 Btn-hover transition duration-300">
          <Button
            img={scissors}
            color="hsl(40, 84%, 53%)"
            shadow="hsl(40, 84%, 53%, 0.7)"
            handleClick={() => {
              handleClick("scissors");
            }}
          />
        </div>
        <div className="absolute -bottom-8 md:-bottom-[4.3rem] Btn-hover transition duration-300">
          <Button
            img={rock}
            color="hsl(349, 70%, 56%)"
            shadow="hsl(349, 70%, 56%, 0.7)"
            handleClick={() => {
              handleClick("rock");
            }}
          />
        </div>
      </div>

      {/* Bonus */}

      <div
        style={{ display: level === 2 && "flex" }}
        className="relative hidden justify-center items-center mt-16 lg:mt-24  w-full sm:w-[400px] md:w-[600px]">
        <div className="level-text absolute top-24  text-3xl font-bold border-b-2 border-white md:text-4xl md:top-36">
          <h2>Level {level}</h2>
        </div>
        <img className=" w-60 md:w-auto" src={pentagon} alt="" />

        <div className="absolute -top-12 md:-top-20 Btn-hover transition duration-300">
          <Button2
            img={scissors}
            color="hsl(40, 84%, 53%)"
            shadow="hsl(40, 84%, 53%, 0.7)"
            handleClick={() => {
              handleClick("scissors");
            }}
          />
        </div>

        <div className="absolute top-12 right-4 md:right-12 Btn-hover transition duration-300">
          <Button2
            img={paper}
            color="hsl(230, 89%, 65%)"
            shadow="hsl(230, 89%, 65%, 0.7)"
            handleClick={() => {
              handleClick("paper");
            }}
          />
        </div>

        <div className="absolute top-12 left-4 md:left-12 Btn-hover transition duration-300">
          <Button2
            img={spock}
            color="hsl(189, 58%, 57%)"
            shadow="hsl(189, 58%, 57%, 0.7)"
            handleClick={() => {
              handleClick("spock");
            }}
          />
        </div>

        <div className="absolute left-[3.5rem] -bottom-16 md:left-[7rem] md:-bottom-[5.5rem] Btn-hover transition duration-300">
          <Button2
            img={lizard}
            color="hsl(261, 72%, 63%)"
            shadow="hsl(261, 72%, 63%, 0.7)"
            handleClick={() => {
              handleClick("lizard");
            }}
          />
        </div>

        <div className="absolute right-[3.5rem] -bottom-16 md:right-[7rem] md:-bottom-[5.5rem] Btn-hover transition duration-300">
          <Button2
            img={rock}
            color="hsl(349, 70%, 56%)"
            shadow="hsl(349, 70%, 56%, 0.7)"
            handleClick={() => {
              handleClick("rock");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Pick;
