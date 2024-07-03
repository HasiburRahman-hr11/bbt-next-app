import Link from "next/link";

const MeetTheTeam = ({ data }) => {
  return (
    <section className="bg-black">
      <div className="max-1920 relative">
        <div className="sm:hidden">
          <img
            src="/images/why-us/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-full min-h-[650px]"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/images/why-us/team-banner-desktop.webp"
            alt="Background Image"
            className="w-full object-cover h-auto min-h-[500px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container w-full h-full">
            <div className="flex h-full items-center py-[6rem]">
              <div className="w-full 3xl:max-w-[622px] max-w-[350px] lg:max-w-[400px] 1xl:max-w-[450px]">
                <div className=" text-white ">
                  <img
                    src="/images/why-us/team-quote-icon.webp"
                    alt="Quote Icon"
                    className="object-contain h-auto inline-block w-[3rem] lg:w-[3.5rem] xl:w-[3rem] 3xl:w-[4.3rem]"
                  />
                  <p className="text-[2.5rem] lg:text-[3rem] 1xl:text-[3.5rem] 3xl:text-[4.5rem] underline my-[3rem] font-normal underline-offset-[5px] decoration-1  xl:leading-[1.2] xl:mt-[3.5rem] xl:mb-[2.5rem] 3xl:mt-[5rem] 2xl:decoration-2 3xl:underline-offset-[8px]">
                    I've always had an affinity and a passion for cars and that
                    whole car culture.
                  </p>
                  <img
                    src="/images/why-us/team-signature.webp"
                    alt="Jatin Ahuja"
                    className="object-contain h-auto inline-block w-[14rem] lg:w-[16rem] 1xl:w-[19rem] 2xl:w-[20rem] xl:ml-[-2.5rem] 3xl:w-[26rem]"
                  />
                </div>
                <div className="mt-[3rem] 1xl:mt-[6rem] 2xl:mt-[8rem] 3xl:mt-[10rem]">
                  <Link
                    href="team"
                    className="w-max px-[4rem] h-[4.5rem] flex justify-center items-center text-[1.4rem] bg-white text-black py-[1rem] rounded-[3rem] tracking-[-1px] font-medium sm:ml-0 xl:text-[1.2rem] 1xl:h-[5rem] 1xl:text-[1.4rem] 2xl:max-w-none 2xl:w-max 2xl:px-[6rem] 2xl:text-[1.5rem] 3xl:h-[6.5rem] 3xl:text-[1.8rem] 3xl:rounded-[4rem] 3xl:px-[7rem] hover:bg-[#f1f1f1] transition-all duration-500 ease-in-out"
                  >
                    Meet The Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
