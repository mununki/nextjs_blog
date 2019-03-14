export default () => {
  return (
    <div className="switch-container">
      <span id="moon">
        <i className="fas fa-moon" />
      </span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <span id="sun">
        <i className="fas fa-sun" />
      </span>
      <style jsx>
        {`
          #moon {
            color: yellow;
            position: absolute;
            left: 3px;
            bottom: 5px;
            z-index: 100;
          }
          #sun {
            color: #ff9f43;
            position: absolute;
            right: 4px;
            bottom: 5px;
          }
          .switch-container {
            display: inline-block;
            position: absolute;
            right: 0;
            margin: 1rem;
            font-size: 1rem;
          }
          .switch {
            position: relative;
            display: inline-block;
            width: 45px;
            height: 22px;
          }

          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #2d3436;
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }

          .slider:before {
            position: absolute;
            content: "";
            height: 22px;
            width: 22px;
            left: 0;
            bottom: 0;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
          }

          input:checked + .slider {
            background-color: #2d3436;
          }

          input:focus + .slider {
            box-shadow: 0 0 1px #2d3436;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(25px);
            -ms-transform: translateX(25px);
            transform: translateX(25px);
          }

          .slider.round {
            border-radius: 34px;
          }

          .slider.round:before {
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};
