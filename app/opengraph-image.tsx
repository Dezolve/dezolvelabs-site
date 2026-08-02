import { ImageResponse } from 'next/og';

export const alt = 'Dezolve Labs — Independent Product Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#f4f1ea',
          color: '#17191d',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#17191d',
              color: '#ffffff',
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 34, fontWeight: 700 }}>Dezolve Labs</span>
            <span style={{ fontSize: 18, color: '#62666f', marginTop: 6 }}>Independent product studio</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 940 }}>
          <span style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: '-0.045em', fontWeight: 700 }}>
            Software products with room to become lasting businesses.
          </span>
          <span style={{ fontSize: 25, color: '#62666f', marginTop: 28 }}>
            Communication · Consumer utility · Wellness · Business operations
          </span>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {['#4d6bff', '#ff8a4c', '#16b8a6', '#1b9ad6'].map((color) => (
            <div key={color} style={{ width: 74, height: 10, borderRadius: 99, background: color }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
