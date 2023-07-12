import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="flex md:hidden">
      <div className="btm-nav bg-base-100 text-primary">
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rounded-full text-secondary p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </NavLink>

        <NavLink to="/search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rounded-full p-1"
            viewBox="-2 -3 28 28"
            stroke="hsl(var(--s))"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M9.08 6.10352e-05C4.56875 6.10352e-05 0.919998 3.64881 0.919998 8.16006C0.919998 12.6713 4.56875 16.3201 9.08 16.3201C10.6906 16.3201 12.1812 15.8476 13.445 15.0451L19.34 20.9401L21.38 18.9001L15.56 13.0951C16.6062 11.7226 17.24 10.0219 17.24 8.16006C17.24 3.64881 13.5912 6.10352e-05 9.08 6.10352e-05ZM9.08 1.92006C12.5356 1.92006 15.32 4.70444 15.32 8.16006C15.32 11.6157 12.5356 14.4001 9.08 14.4001C5.62437 14.4001 2.84 11.6157 2.84 8.16006C2.84 4.70444 5.62437 1.92006 9.08 1.92006Z"
              fill="hsl(var(--s))"
            />
          </svg>
        </NavLink>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rounded-full text-secondary p-1"
            fill="none"
            viewBox="-1 0 28 25"
            stroke="currentColor"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M12.5 0C11.4004 0 10.5 0.900391 10.5 2C10.5 2.25781 10.5508 2.50781 10.6406 2.73438C7.82812 3.46484 6 5.9082 6 9C6 12.916 5.03906 14.6992 4.125 15.7031C3.66797 16.2051 3.2168 16.5098 2.82812 16.7969C2.63281 16.9395 2.45508 17.082 2.29688 17.2656C2.13867 17.4492 2 17.7109 2 18C2 18.6875 2.42188 19.2715 3.01562 19.6562C3.60938 20.041 4.38867 20.2891 5.32812 20.4844C6.54688 20.7363 8.05078 20.8691 9.70312 20.9375C9.57812 21.2695 9.5 21.627 9.5 22C9.5 23.6504 10.8496 25 12.5 25C14.1504 25 15.5 23.6504 15.5 22C15.5 21.625 15.4238 21.2676 15.2969 20.9375C16.9492 20.8691 18.4531 20.7363 19.6719 20.4844C20.6113 20.2891 21.3906 20.041 21.9844 19.6562C22.5781 19.2715 23 18.6875 23 18C23 17.7109 22.8613 17.4492 22.7031 17.2656C22.5449 17.082 22.3672 16.9395 22.1719 16.7969C21.7832 16.5098 21.332 16.2051 20.875 15.7031C19.9609 14.6992 19 12.916 19 9C19 5.91016 17.168 3.46875 14.3594 2.73438C14.4492 2.50781 14.5 2.25781 14.5 2C14.5 0.900391 13.5996 0 12.5 0ZM12.5 1C13.0586 1 13.5 1.44141 13.5 2C13.5 2.55859 13.0586 3 12.5 3C11.9414 3 11.5 2.55859 11.5 2C11.5 1.44141 11.9414 1 12.5 1ZM13.6719 3.59375C16.3379 4.06836 18 6.12891 18 9C18 13.084 19.0391 15.1816 20.125 16.375C20.668 16.9707 21.2168 17.3438 21.5781 17.6094C21.7578 17.7422 21.8926 17.8535 21.9531 17.9219C22.0137 17.9902 22 17.9844 22 18C22 18.3125 21.8555 18.541 21.4375 18.8125C21.0195 19.084 20.3398 19.3359 19.4688 19.5156C17.7266 19.877 15.2461 20 12.5 20C9.75391 20 7.27344 19.877 5.53125 19.5156C4.66016 19.3359 3.98047 19.084 3.5625 18.8125C3.14453 18.541 3 18.3125 3 18C3 17.9844 2.98633 17.9902 3.04688 17.9219C3.10742 17.8535 3.24219 17.7422 3.42188 17.6094C3.7832 17.3438 4.33203 16.9707 4.875 16.375C5.96094 15.1816 7 13.084 7 9C7 6.13086 8.66406 4.08594 11.3281 3.60938C11.6602 3.85352 12.0605 4 12.5 4C12.9434 4 13.3398 3.8418 13.6719 3.59375ZM10.7812 20.9688C11.3418 20.9805 11.9121 21 12.5 21C13.0879 21 13.6582 20.9805 14.2188 20.9688C14.3965 21.2695 14.5 21.625 14.5 22C14.5 23.1113 13.6113 24 12.5 24C11.3887 24 10.5 23.1113 10.5 22C10.5 21.6211 10.5996 21.2695 10.7812 20.9688Z"
              fill="black"
            />
          </svg>
        </button>

        <NavLink to="/chatpage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rounded-full text-secondary p-1"
            fill="none"
            viewBox="-1 -2 25 25"
            stroke="currentColor"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M11.5 0C5.20703 0 0.03125 4.07711 0.03125 9.17125C0.03125 12.1271 1.8125 14.7344 4.5 16.4019C4.49609 16.5007 4.5 16.6534 4.35938 17.135C4.18555 17.7298 3.8418 18.5725 3.125 19.5069L2.60938 20.1681L3.5 20.1825C6.58789 20.1951 8.37695 18.3281 8.65625 18.0263C9.56836 18.2131 10.5176 18.3425 11.5 18.3425C17.791 18.3425 22.9688 14.2654 22.9688 9.17125C22.9688 4.07711 17.791 0 11.5 0ZM11.5 0.8625C17.3574 0.8625 22.0312 4.61258 22.0312 9.17125C22.0312 13.7299 17.3574 17.48 11.5 17.48C10.498 17.48 9.52539 17.3686 8.60938 17.1637L8.32812 17.1063L8.14062 17.3219C8.14062 17.3219 6.69531 18.8205 4.39062 19.1763C4.80664 18.4898 5.12305 17.852 5.26562 17.365C5.46484 16.684 5.46875 16.215 5.46875 16.215V15.985L5.25 15.8556C2.63672 14.3319 0.96875 11.9043 0.96875 9.17125C0.96875 4.61258 5.64062 0.8625 11.5 0.8625Z"
              fill="black"
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
