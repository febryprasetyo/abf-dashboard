import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteStationById } from '../../service/stationService';
import { TableStationType } from '../../types/typeStation';

type PropsDelType = {
  data: TableStationType;
  isOpen: boolean;
  handleOpen: (val: boolean) => void;
};

export const DeleteStationDialog = ({
  data,
  isOpen,
  handleOpen,
}: PropsDelType) => {
  const queryClient = useQueryClient();
  const muttation = useMutation({
    mutationFn: () => deleteStationById(+data.id),
    mutationKey: ['station'],
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['station'] });
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  return (
    <Dialog
      size='xs'
      open={isOpen}
      handler={handleOpen}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}>
      <DialogHeader
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
        Apakah anda yakin menghapus Stasiun ini ?
      </DialogHeader>
      <DialogFooter
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>
        <Button
          variant='text'
          color='red'
          onClick={() => handleOpen(false)}
          className='mr-1'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <span>Batal</span>
        </Button>
        <Button
          variant='gradient'
          color='green'
          disabled={muttation.isPending}
          onClick={() => {
            muttation.mutateAsync().finally(() => {
              handleOpen(false);
            });
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}>
          <span>Hapus</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
