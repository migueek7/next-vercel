import { FC, HtmlHTMLAttributes } from 'react';

type BoxProps = {
  children: React.ReactNode; // 👈️ define children prop
};

const DarkLayout = (props: BoxProps) => {
  return (
    <div style={{
        backgroundColor: 'rgba(139, 61, 61, 0.3)',
        borderRadius: '5px',
        padding: '10px'
    }}>
        <h3>Dark Layout</h3>

        <div>
          { props.children }
        </div>

    </div>
  )
}

export default DarkLayout