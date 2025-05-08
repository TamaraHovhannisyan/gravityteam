import React from 'react'

const JoinTeam = () => {
  return (
    <div className=" flex justify-center mt-30">
      <div className="flex items-center gap-40">
        <h2 className='text-4xl'>
          Join <br /> Gravity Team
        </h2>
        <div className="flex flex-col gap-4">
          <p>
            Join our community of innovators, problem solvers and <br />
            owners who apply scientific discovery techniques to <br />
            make crypto markets a better place for everyone.
          </p>
          <p>
            As we emphasize it in our name – Gravity Team, we are <br />
            a team. A team of bright, talented people, each masters <br />
            of their specialty, curious about the world and eager to <br />
            solve the new exciting cryptocurrency market problems, <br />
            build cool stuff and have fun whilst doing so!
          </p>
          <button>Learn more about working with us</button>
        </div>
      </div>
    </div>
  );
}

export default JoinTeam