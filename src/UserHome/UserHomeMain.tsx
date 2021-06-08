import React from 'react'
import UHheader from './UHheader'
import UHprofil from './UHprofil'
import UHtab from './UHtab'

const UserHomeMain: React.FC = () => {
    return (
            <>
            <UHheader />
            <UHprofil />
            <UHtab />
            </>
    );
};

export default UserHomeMain;