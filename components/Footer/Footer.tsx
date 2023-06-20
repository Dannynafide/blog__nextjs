import {Logo} from 'components/Nav';
import FollowUs from 'components/readySections/FollowUs/FollowUs';
import JoinMailingList from 'components/readySections/JoinMailingList/JoinMailingList';

export default function Footer() {
  return (
    <footer className="text-base text-white md:grid md:grid-cols-2 md:gap-24 py-10">
      <div>
        <Logo />

        <JoinMailingList />

        <div className="text-lg">
          <FollowUs />
        </div>
      </div>

      <div className="flex flex-col gap-7 font-bold mt-14 md:mt-0">
        <p>Lorem ipsum dolor sit </p>

        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor </p>

        <p>Incididunt ut labore et dolore magna aliqua. </p>

        <p>Ipsum suspendisse ultrices gravida. </p>
        <p className="text-xs text-gray-500">Copyright 2023</p>
      </div>
    </footer>
  );
}
