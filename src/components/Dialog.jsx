import { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
} from '@chakra-ui/react';

export const Dialog = ({ isOpen, name, onClose }) => {
  const cancelRef = useRef();

  //---------------- Handlers ----------------
  const handleCancel = () => {
    onClose(false);
  };
  const handleConfirm = () => {
    onClose(true);
  };

  //---------------- Return ----------------
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bg="bg.50">
          <AlertDialogHeader fontSize="lg" fontWeight="bold" as="h3">
            Update Contact
          </AlertDialogHeader>

          <AlertDialogBody as="p">
            <Text as="b">{name}</Text> is in the cotacts already. Do you want to
            update the contact?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef.current}
              onClick={handleCancel}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              colorScheme="accent"
              bg="accent.400"
              onClick={handleConfirm}
              ml={3}
            >
              Update
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
