import { Card, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPaginateStation } from '../../service/stationService';
import { TableStationType } from '../../types/typeStation';

export default function ListStation() {
  const { data, isError } = useQuery({
    queryFn: () => getPaginateStation({ limit: 1000, offset: 0 }),
    queryKey: ['station'],
  });

  if (isError || !data?.success) {
    return (
      <div className='flex justify-center align-middle'>
        <h3 className='text-lg font-semibold text-blue-gray-500'>
          Station Tidak Tersedia
        </h3>
      </div>
    );
  }

  return (
    <div>
      <Card
        className='p-8'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
        <Typography
          className='text-xl font-semibold'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          Stasiun
        </Typography>
        <div>
          {data?.data?.values.map((station: TableStationType) => (
            <Link
              target='_blank'
              rel='noopener noreferrer'
              key={station.id}
              to={`/monitoring/${station.id_mesin}`}>
              <div className='w-full border rounded p-2 flex gap-x-3 mt-4 cursor-pointer'>
                <img src='/iott.jpg' className='w-36 rounded-sm' alt='auu' />
                <div className='flex-1'>
                  <h3 className='font-semibold text-lg'>
                    {station.nama_stasiun}
                  </h3>
                  <p className='text-gray-500 text-lg'>{station.address}</p>
                  <p className='text-sm text-blue-gray-700'>
                    {station.city_name}, {station.province_name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
