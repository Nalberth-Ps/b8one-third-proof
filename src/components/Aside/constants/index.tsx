type Options = {
  name: string;
  icon: JSX.Element;
  hasChildren: boolean;
}

export const options: Options[] = [
  {
    name: 'Relatório',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    hasChildren: false,
  },
  {
    name: 'Pra vender',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" stroke="#2E046D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    hasChildren: true,
  },
  {
    name: 'Assinaturas',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.6168 3.75129C16.8552 3.51287 17.1383 3.32375 17.4498 3.19471C17.7613 3.06568 18.0952 2.99927 18.4324 2.99927C18.7696 2.99927 19.1035 3.06568 19.415 3.19471C19.7265 3.32375 20.0095 3.51287 20.248 3.75129C20.4864 3.98971 20.6755 4.27276 20.8046 4.58427C20.9336 4.89579 21 5.22966 21 5.56684C21 5.90402 20.9336 6.2379 20.8046 6.54941C20.6755 6.86092 20.4864 7.14397 20.248 7.38239L7.99283 19.6373L3 20.999L4.36168 16.0062L16.6168 3.75129Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    hasChildren: false,
  },
  {
    name: 'Financeiro',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21.9987C17.5228 21.9987 22 17.5216 22 11.9989C22 6.47611 17.5228 1.99902 12 1.99902C6.47715 1.99902 2 6.47611 2 11.9989C2 17.5216 6.47715 21.9987 12 21.9987Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 7.99902H11.1667C9.97 7.99902 9 8.89446 9 9.99902C9 11.1036 9.97 11.999 11.1667 11.999H12.8333C14.03 11.999 15 12.8944 15 13.999C15 15.1036 14.03 15.999 12.8333 15.999H9"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M12 5.99902V7.99902" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 15.999L12 17.999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    hasChildren: true,
  },
  {
    name: 'Configurações',
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_114_12974)">
          <path
            d="M19.4 15.9985C19.2669 16.3001 19.2272 16.6346 19.286 16.959C19.3448 17.2834 19.4995 17.5828 19.73 17.8184L19.79 17.8784C19.976 18.0642 20.1235 18.2847 20.2241 18.5275C20.3248 18.7703 20.3766 19.0306 20.3766 19.2934C20.3766 19.5562 20.3248 19.8165 20.2241 20.0593C20.1235 20.3021 19.976 20.5226 19.79 20.7084C19.6043 20.8943 19.3837 21.0419 19.1409 21.1425C18.8981 21.2432 18.6378 21.295 18.375 21.295C18.1122 21.295 17.8519 21.2432 17.6091 21.1425C17.3663 21.0419 17.1457 20.8943 16.96 20.7084L16.9 20.6484C16.6643 20.4179 16.365 20.2632 16.0406 20.2044C15.7162 20.1456 15.3816 20.1853 15.08 20.3184C14.7842 20.4452 14.532 20.6556 14.3543 20.9239C14.1766 21.1922 14.0813 21.5066 14.08 21.8284V21.9984C14.08 22.5288 13.8693 23.0375 13.4942 23.4126C13.1191 23.7876 12.6104 23.9983 12.08 23.9983C11.5496 23.9983 11.0409 23.7876 10.6658 23.4126C10.2907 23.0375 10.08 22.5288 10.08 21.9984V21.9084C10.0723 21.5774 9.96512 21.2564 9.77251 20.9871C9.5799 20.7178 9.31074 20.5127 9 20.3984C8.69838 20.2653 8.36381 20.2256 8.03941 20.2844C7.71502 20.3432 7.41568 20.4979 7.18 20.7284L7.12 20.7884C6.93425 20.9743 6.71368 21.1219 6.47088 21.2225C6.22808 21.3231 5.96783 21.375 5.705 21.375C5.44217 21.375 5.18192 21.3231 4.93912 21.2225C4.69632 21.1219 4.47575 20.9743 4.29 20.7884C4.10405 20.6026 3.95653 20.3821 3.85588 20.1393C3.75523 19.8965 3.70343 19.6362 3.70343 19.3734C3.70343 19.1106 3.75523 18.8503 3.85588 18.6075C3.95653 18.3647 4.10405 18.1442 4.29 17.9584L4.35 17.8984C4.58054 17.6628 4.73519 17.3634 4.794 17.039C4.85282 16.7146 4.81312 16.3801 4.68 16.0785C4.55324 15.7827 4.34276 15.5304 4.07447 15.3528C3.80618 15.1751 3.49179 15.0798 3.17 15.0785H3C2.46957 15.0785 1.96086 14.8678 1.58579 14.4927C1.21071 14.1176 1 13.6089 1 13.0785C1 12.5481 1.21071 12.0394 1.58579 11.6643C1.96086 11.2892 2.46957 11.0785 3 11.0785H3.09C3.42099 11.0708 3.742 10.9636 4.0113 10.771C4.28059 10.5784 4.48572 10.3093 4.6 9.99854C4.73312 9.69693 4.77282 9.36236 4.714 9.03797C4.65519 8.71358 4.50054 8.41424 4.27 8.17857L4.21 8.11857C4.02405 7.93283 3.87653 7.71225 3.77588 7.46946C3.67523 7.22667 3.62343 6.96642 3.62343 6.70359C3.62343 6.44076 3.67523 6.18051 3.77588 5.93772C3.87653 5.69493 4.02405 5.47435 4.21 5.28861C4.39575 5.10266 4.61632 4.95514 4.85912 4.8545C5.10192 4.75385 5.36217 4.70205 5.625 4.70205C5.88783 4.70205 6.14808 4.75385 6.39088 4.8545C6.63368 4.95514 6.85425 5.10266 7.04 5.28861L7.1 5.34861C7.33568 5.57914 7.63502 5.73379 7.95941 5.79261C8.28381 5.85143 8.61838 5.81172 8.92 5.6786H9C9.29577 5.55184 9.54802 5.34137 9.72569 5.07308C9.90337 4.80479 9.99872 4.49041 10 4.16863V3.99863C10 3.4682 10.2107 2.9595 10.5858 2.58444C10.9609 2.20937 11.4696 1.99866 12 1.99866C12.5304 1.99866 13.0391 2.20937 13.4142 2.58444C13.7893 2.9595 14 3.4682 14 3.99863V4.08863C14.0013 4.41041 14.0966 4.72479 14.2743 4.99308C14.452 5.26137 14.7042 5.47184 15 5.59861C15.3016 5.73172 15.6362 5.77143 15.9606 5.71261C16.285 5.65379 16.5843 5.49914 16.82 5.26861L16.88 5.20861C17.0657 5.02266 17.2863 4.87515 17.5291 4.7745C17.7719 4.67385 18.0322 4.62205 18.295 4.62205C18.5578 4.62205 18.8181 4.67385 19.0609 4.7745C19.3037 4.87515 19.5243 5.02266 19.71 5.20861C19.896 5.39436 20.0435 5.61493 20.1441 5.85772C20.2448 6.10051 20.2966 6.36076 20.2966 6.62359C20.2966 6.88642 20.2448 7.14667 20.1441 7.38946C20.0435 7.63225 19.896 7.85283 19.71 8.03857L19.65 8.09857C19.4195 8.33425 19.2648 8.63358 19.206 8.95797C19.1472 9.28236 19.1869 9.61693 19.32 9.91854V9.99854C19.4468 10.2943 19.6572 10.5466 19.9255 10.7242C20.1938 10.9019 20.5082 10.9972 20.83 10.9985H21C21.5304 10.9985 22.0391 11.2092 22.4142 11.5843C22.7893 11.9594 23 12.4681 23 12.9985C23 13.5289 22.7893 14.0376 22.4142 14.4127C22.0391 14.7878 21.5304 14.9985 21 14.9985H20.91C20.5882 14.9998 20.2738 15.0951 20.0055 15.2728C19.7372 15.4504 19.5268 15.7027 19.4 15.9985V15.9985Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 15.9987C13.6569 15.9987 15 14.6555 15 12.9987C15 11.3418 13.6569 9.99866 12 9.99866C10.3431 9.99866 9 11.3418 9 12.9987C9 14.6555 10.3431 15.9987 12 15.9987Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_114_12974">
            <rect width="24" height="23.9997" fill="white" transform="translate(0 0.998657)" />
          </clipPath>
        </defs>
      </svg>
    ),
    hasChildren: true,
  },
  {
    name: 'Ferramentas',
    icon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 4.74792H3.75V11.4979H10.5V4.74792Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20.25 14.4979H13.5V21.2479H20.25V14.4979Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10.5 14.4979H3.75V21.2479H10.5V14.4979Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.0947 11.251C18.0947 11.8033 17.647 12.251 17.0947 12.251C16.5424 12.251 16.0947 11.8033 16.0947 11.251L16.0947 8.99792H14C13.4477 8.99792 13 8.55021 13 7.99792C13 7.44564 13.4477 6.99792 14 6.99792H16.0947L16.0947 4.74792C16.0947 4.19564 16.5424 3.74792 17.0947 3.74792C17.647 3.74792 18.0947 4.19564 18.0947 4.74792V6.99792H20.5031C21.0553 6.99792 21.5031 7.44564 21.5031 7.99792C21.5031 8.55021 21.0553 8.99792 20.5031 8.99792H18.0947V11.251Z"
          fill="black"
        />
      </svg>
    ),
    hasChildren: true,
  },
];