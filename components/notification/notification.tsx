import toast from 'react-hot-toast';
import {MdOutlineClose} from 'react-icons/md';

import {LogoIcon} from 'components/Nav';

const notify = () =>
  toast.custom(
    (t) => (
      <div className={`notificationWrapper ${t.visible ? 'top-0' : '-top-96'}`}>
        <div className="iconWrapper">
          <LogoIcon />
        </div>
        <div className="contentWrapper">
          <h1>This page is test.</h1>
          <p>Some elements are&apos;t fully developed and don&apos;t work.</p>
        </div>
        <button className="closeIcon" onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </button>
      </div>
    ),
    {id: 'unique-notification', position: 'top-center'}
  );

export default notify;
