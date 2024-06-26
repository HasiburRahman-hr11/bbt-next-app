import React from "react";

const GuideContent = () => {
  return (
    <section className="bg-white pt-[4rem] xl:pt-[6rem] pb-[6rem] lg:pb-[8rem] xl:pb-[12rem] 3xl:pb-[15rem]">
      <div className="max-1920">
        <div className="container">
          <div className="[&>p]:font-light [&>p]:text-[1.3rem] xl:[&>p]:text-[1.4rem] 2xl:[&>p]:text-[1.6rem] 3xl:[&>p]:text-[1.9rem] [&>h3]:leading-[1.2] [&>h3]:tracking-[-1.5px] [&>h3]:text-[2.4rem] xl:[&>h3]:text-[3rem] 1xl:[&>h3]:text-[3.4rem] 2xl:[&>h3]:text-[3.8rem] 3xl:[&>h3]:text-[4.5rem] lg:w-[90%] mx-auto xl:w-[60%] [&>img]:w-full [&>img]:block [&>img]:h-auto [&>img]:rounded-[1rem] [&_b]:font-medium">
            <p>
              Among the many technical jargons that you keep on hearing about
              the automobile, the one that comes up repeatedly in the
              conversation is about torque vectoring. Today we will like to
              demystify this term and tell you what it means and why it is so
              important.
            </p>
            <br />
            <br />
            <h3>What is torque vectoring?</h3>
            <br />
            <p className="text-[#EF3024] italic font-medium">
              <b>Torque vectoring, in a layman’s term, means how the torque
              produced in the engine is distributed between the wheels or axle
              to improve the driving experience of a car.</b>
            </p>
            <br />
            <br />
            <h3>Why is it so important?</h3>
            <br />
            <p>
              Torque vectoring is very important as it allows you to put weight
              on different wheels of the car that improve your control over the
              vehicle in some demanding situations. Like if you are taking a
              sharp corner, then putting the weight on the front wheels allow
              you to take the turn smoothly. This happens as more weight on the
              front tyres improves their grip on the road, which prevents
              skidding and provides better control over the car.
            </p>
            <br />
            <br />
            <h3>How many kinds of torque vectoring are available?</h3>
            <br />
            <p>
              At present, there are four distinct types of torque vectoring
              available on the modern cars. These are very distinct and have
              their own advantages.
            </p>
            <br />
            <br />
            <img src="/images/guide-detail/gd-img-1.webp" alt="" />
            <br />
            <p>
              {" "}
              <b>1). Rear wheel drive:</b> Here the torque generated by the
              engine is transmitted to the rear wheels of the vehicle. Different
              cars use different methods to distribute the torque between the
              two rear wheels. While some cars use a mechanical method other use
              computer for the purpose. In some, extra torque is transmitted to
              the outer wheel to improve its gripping power while in few the
              torque is reduced to the inner wheels through brakes to give more
              power to the outer wheel while cornering.
            </p>
            <br />
            <img src="/images/guide-detail/gd-img-2.webp" alt="" />
            <br />
            <p>
              {" "}
              <b>2). Front wheel drive:</b> This is just the opposite of the
              rear wheel drive. Here the weight distribution is made on the
              front wheels of the car to improve on any under-steering
              condition, especially while taking a turn.
            </p>
            <br />
            <img src="/images/guide-detail/gd-img-3.webp" alt="" />
            <br />
            <p>
              <b>3). All-wheel drive:</b> This system is mainly used in the
              all-terrain cars to give the driver more control over the vehicle
              so that the car can drive smoothly over difficult terrains.
              Different car maker uses a different type of techniques to improve
              the power to different wheels so that each of the wheels gets the
              required power to reduce torque wastage. In most premium, four
              wheel drives the torque distribution is done through a computer.
            </p>
            <br />
            <img src="/images/guide-detail/gd-img-4.webp" alt="" />
            <br />
            <p>
              <b>4). Hybrid drive:</b> This is the latest form of all-wheel
              drive that is invented to not only improve the control over the
              car but also improve the fuel efficiency. In this kind of drive,
              there are three electric motors; one for each of the rear wheels
              and the third for the front wheels. During cornering, the car can
              either add more torque to a particular wheel or use the
              regenerative braking on the opposite wheel that allows the outer
              wheel to rotate and get better grip on the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideContent;
