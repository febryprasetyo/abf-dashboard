import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { PayloadDeviceType } from '../../types/typeDevice';
import { addDeviceService } from '../../service/deviceService';

type PropAddTypeDialog = {
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
};

export const AddMesinDialog = ({ isOpen, handleOpen }: PropAddTypeDialog) => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PayloadDeviceType>({
    defaultValues: {
      id_mesin: '',
      nama_dinas: '',
      nama_stasiun: '',
    },
  });
  const muttation = useMutation({
    mutationFn: (payload: PayloadDeviceType) => addDeviceService(payload),
    mutationKey: ['device'],
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data) => {
      toast.error(data.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['device'] });
      handleOpen(false);
      reset();
    },
  });
  const onSubmit = (data: PayloadDeviceType) => {
    muttation.mutate(data);
  };

  return (
    <Dialog
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      size='xs'
      open={isOpen}
      handler={handleOpen}>
      <DialogHeader
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
        Tambah Device
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <div>
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant='h6'
              color='blue-gray'
              className=''>
              ID Mesin
            </Typography>
            <Input
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size='md'
              placeholder='Id mesin'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined} // labelProps={{
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              {...register('id_mesin', { required: true })}
            />
            {errors.id_mesin?.type === 'required' && (
              <p role='alert' className='text-red-600'>
                Id mesin wajib diisi
              </p>
            )}
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant='h6'
              color='blue-gray'
              className='mt-3'>
              Nama Dinas
            </Typography>
            <Input
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size='md'
              placeholder='Nama Dinas'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined} // labelProps={{
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              {...register('nama_dinas', { required: true })}
            />
            {errors.nama_dinas?.type === 'required' && (
              <p role='alert' className='text-red-600'>
                Nama dinas wajib diisi
              </p>
            )}
            <Typography
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant='h6'
              color='blue-gray'
              className='mt-3'>
              Nama Stasiun
            </Typography>
            <Input
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size='md'
              placeholder='Nama stasiun'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              crossOrigin={undefined} // labelProps={{
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              {...register('nama_stasiun', { required: true })}
            />
            {errors.nama_stasiun?.type === 'required' && (
              <p role='alert' className='text-red-600'>
                Nama stasiun wajib diisi
              </p>
            )}
          </div>
        </DialogBody>
        <DialogFooter
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant='text'
            color='red'
            onClick={() => handleOpen(false)}
            className='mr-1'>
            <span>Batal</span>
          </Button>
          <Button
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            variant='gradient'
            color='green'
            type='submit'>
            <span>Simpan</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};
