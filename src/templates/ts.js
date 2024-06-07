import classNames from 'classnames/bind';
import styles from "./COMPONENT_NAME.scss";

export type COMPONENT_NAMEProps = React.PropsWithChildren<{}>;

const cx = classNames.bind(styles);

const COMPONENT_NAME = (props: COMPONENT_NAMEProps): JSX.Element => {
  console.log("TODO", "COMPONENT_NAME", props);
  return <div className={cx('COMPONENT_CLASSNAME')} />;
};

export default COMPONENT_NAME;
