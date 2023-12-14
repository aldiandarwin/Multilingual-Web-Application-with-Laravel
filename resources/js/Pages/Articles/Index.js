import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { __ } from '@/Libs/Lang';

export default function Index(props) {

    return (
        <Authenticated auth={props.auth}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className='text-3xl'>{__('Articles')}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
