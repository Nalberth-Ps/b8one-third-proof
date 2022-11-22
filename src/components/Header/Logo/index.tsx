import React from 'react';

export const HeaderLogo = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="16" cy="16" r="16" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_36231" transform="scale(0.03125)" />
        </pattern>
        <image
          id="image0_1_36231"
          width="32"
          height="32"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};