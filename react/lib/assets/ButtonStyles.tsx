type ButtonStylesProps = {
  height: number;
  width: number;
};

export default function ButtonStyles(props: ButtonStylesProps) {
  return (
    <style>
      {`
       .doppler-btn {
        all: initial;
        border: unset;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: ${props.width}px;
        height: ${props.height}px;
        font-weight: 700;
        color: #fff;
        border-radius: ${props.height / 9}px;
        cursor: pointer;
        overflow: hidden;
        padding: 0 ${props.height / 4}px;
      }

      .doppler-gradient {
        position: absolute;
        top: 0;
        left: 0;
        min-width:100%;
        min-height:100%;
        width: 100%;
        height: 100%;
        opacity: 1;
        background: linear-gradient(216.71deg, #4F80FF 6.72%, #7A4BFF 91.2%);
        transition: all .2s ease-in-out;
      }

      .doppler-gradient-hover {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(216.71deg, #2375F3 6.72%, #7C1FF4 91.2%);
        transition: all .2s ease-in-out;
      }

      .doppler-btn:hover .doppler-gradient-hover {
        opacity: 1;
      }

      svg {
        z-index: 1;
      }
    `}
    </style>
  );
}
