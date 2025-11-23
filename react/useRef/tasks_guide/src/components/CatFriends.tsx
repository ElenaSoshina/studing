import { useState, useRef, useEffect } from 'react';

const catList: { id: number, imageUrl: string }[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
  });
}

export default function CatFriends() {
  const [index, setIndex] = useState(0);
  const itemRef = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    itemRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [index])


  return (
    <>
      <h1>CatFriends</h1>
      <nav>
        <button onClick={() => {
          if (index < catList.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}>
          Next
        </button>
      </nav>
      <div style={{ overflowX: 'auto', width: '100%' }}>
  <ul
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
      listStyleType: 'none',
      padding: 0,
      margin: 0
    }}
  >
    {catList.map((cat, i) => (
      <li key={cat.id} style={{ flex: '0 0 auto' }}>
        <img
          ref={(el: HTMLImageElement | null) => {
            if (el) {
              itemRef.current[i] = el
            }
          }}
          src={cat.imageUrl}
          alt={'Cat #' + cat.id}
          style={{
            display: 'block',
            outline: index === i ? '4px solid #3b82f6' : 'none',
            borderRadius: 8
          }}
        />
      </li>
    ))}
  </ul>
</div>
    </>
  );
}

