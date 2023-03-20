import { FC } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

type Album = {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async (): Promise<Album[]> => {
  const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  return result.data;
}

export const ReactQuery: FC = () => {
  const { isLoading, error, data } = useQuery<Album[]>({
    queryKey: ['albums'],
    queryFn: fetchAlbums
  });

  return (
    <div>
      <p>React Query</p>
      { data?.map((album: Album) => {
        return <p key={album.id}>{album.title}</p>
      }) }
    </div>
  )
}
