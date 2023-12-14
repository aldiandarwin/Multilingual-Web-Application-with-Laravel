import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import Button from '@/Components/Button';

export default function Create(props) {
    const {data, setData, post} = useForm({ name: '' })
    const submit = (e) => {
        e.preventDefault();

        post('/language')
    }
    return (
        <>
            <Head title="Language" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                <select value={data.name} onChange={(e) => setData('name', e.target.value)} name="name" id="name">
                                    <option value="">Choose language</option>
                                    <option value="id">Bahasa</option>
                                    <option value="en">English</option>
                                </select>
                                <Button>Switch</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
