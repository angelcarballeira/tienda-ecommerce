import { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import { API_URL } from '../../Components/Api';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;