import propTypes from 'prop-types';
export default function Footer({customText}) {
  return (
    <div className='d-flex justify-content-between mt-2'>
      <p>Footer</p>
      <p>{customText}</p>
    </div>

  )
}
Footer.propTypes = {
  text: propTypes.string,
};
