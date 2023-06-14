import FollowUs from '@/components/readySections/FollowUs/FollowUs';
import {Logo} from 'components/Nav';
import JoinMailingList from '../readySections/JoinMailingList/JoinMailingList';

export default function Footer() {
  return (
    <footer className=" text-base text-white grid grid-cols-2 gap-24 py-10">
      <div>
        <Logo />

        <JoinMailingList />

        <FollowUs />
      </div>

      <div className="flex flex-col gap-7 font-bold">
        <p>Lorem ipsum dolor sit </p>

        <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor </p>

        <p>Incididunt ut labore et dolore magna aliqua. </p>

        <p>Ipsum suspendisse ultrices gravida. </p>
      </div>
    </footer>
  );
}
