import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';

const TABLE_HEAD = [
  '#',
  'Nama Stasiun',
  'ID Mesin',
  'Alamat',
  'Provinsi',
  'Kota',
  '',
];

const TABLE_ROWS = [
  {
    nama: 'PT. Cahaya Mas Cemerlang',
    id_mesin: '240305005225028',
    alamat: 'Jl. Rawa Gelam II No 3, Pulo Gadung, Jakarta Timur',
    provinsi: 'DKI Jakarta',
    kota: 'Jakarta timur',
  },
  {
    nama: 'DLH Kab. Bangli',
    id_mesin: '240305005225029',
    alamat: 'Jl Raya Bangli No 111, Kabupaten Bangli, Bali',
    provinsi: 'Bali',
    kota: 'Bangli',
  },
];

const TableStasiun = () => {
  return (
    <>
      <Card
        className='h-full w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
        <CardHeader
          floated={false}
          shadow={false}
          className='rounded-none'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <div className='mb-8 flex items-center justify-between gap-8'>
            <div>
              <Typography
                variant='h3'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                List Stasiun
              </Typography>
            </div>
            <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
              <Button
                className='inline-flex items-center justify-center gap-2.5 rounded-full bg-meta-5 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Tambah
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody
          className='overflow-x-auto px-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <table className='mt-4 w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}>
                      {head}{' '}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className='h-4 w-4'
                        />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ nama, id_mesin, alamat, provinsi, kota }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={nama}>
                      <td className={classes}>
                        <div className='flex items-center gap-3'>
                          <div className='flex flex-col'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal'
                              placeholder={undefined}
                              onPointerEnterCapture={undefined}
                              onPointerLeaveCapture={undefined}>
                              {index + 1}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {nama}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className='w-max'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal opacity-70'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {id_mesin}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}>
                          {alamat}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}>
                          {provinsi}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant='small'
                          color='blue-gray'
                          className='font-normal'
                          placeholder={undefined}
                          onPointerEnterCapture={undefined}
                          onPointerLeaveCapture={undefined}>
                          {kota}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content='Edit Stasiun'>
                          <IconButton
                            variant='text'
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            <PencilIcon className='h-4 w-4' />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter
          className='flex items-center justify-between border-t border-blue-gray-50 p-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <Button
            variant='outlined'
            size='sm'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            Previous
          </Button>
          <div className='flex items-center gap-2'>
            <IconButton
              variant='outlined'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              1
            </IconButton>
            <IconButton
              variant='text'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              2
            </IconButton>
            <IconButton
              variant='text'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              3
            </IconButton>
            <IconButton
              variant='text'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              ...
            </IconButton>
            <IconButton
              variant='text'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              8
            </IconButton>
            <IconButton
              variant='text'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              9
            </IconButton>
            <IconButton
              variant='text'
              size='sm'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              10
            </IconButton>
          </div>
          <Button
            variant='outlined'
            size='sm'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            Next
          </Button>
        </CardFooter>
      </Card>
      <div></div>
    </>
  );
};

export default TableStasiun;
