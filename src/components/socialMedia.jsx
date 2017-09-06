import React from 'react'


const SocialMedia = () => {

  return (
    <div className='social-profiles'>
      <a className='social-profile-icon' href='https://www.facebook.com'>
        <img border="0"
          src='https://www.roguejohnsen.com/images/facebook.png'
          width='44'
          height='44'
        />
      </a>
      <a className='social-profile-icon' href='https://www.twitter.com'>
        <img border='0'
          src='http://www.iconsdb.com/icons/preview/gray/twitter-xxl.png'
          width='48'
          height='48'
        />
      </a>
      <a className='social-profile-icon' href='https://www.google.com'>
        <img border='0'
          src='https://tinbits.io/images/google-plus-grey.png'
          width='44'
          height='44'
        />
      </a>
      <a href="mailto:" target="_blank">
        <i class="fa fa-envelope fa-2x"></i>
      </a>
    </div>
  )
}

export default SocialMedia
