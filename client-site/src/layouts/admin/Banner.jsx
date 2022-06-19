import React, { useEffect, useState } from 'react';
import {Header, Sidebar} from "../../components";
import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBanner, addBanner, deleteBanner } from '../../redux/action';
import '../../style/main.css';

const Banner = () => {
    const dispatch = useDispatch();
    const banners = useSelector(state => state.banners);

    const [image, setImage] = useState(null);
    const [submitForm, setSubmitForm] = useState({
        gambar_banner: "",
    })

    const uploadImage =  (e) => {
        let uploaded = e.target.files[0];
        setImage(URL.createObjectURL(uploaded));

        // save image to backend
        let formData = new FormData();
        formData.append("photo", uploaded);
    
        fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, `<<<< data`);
            setSubmitForm({
                ...submitForm,
                gambar_banner: data.image
            })
        });
    }

    const handleAddBanner = (e) => {
        e.preventDefault();
        dispatch(addBanner(submitForm));
    }

    const handleDeleteBanner = (e) => {
        dispatch(deleteBanner(e.id))
    }

    useEffect(()=> {
        ScriptNavbar();
        dispatch(fetchBanner());
    }, []);

  return (
    <>
    <Header />
    <Sidebar />
    <main className="banner">
        <div className="add-banner-box">
            <div className="head-bar-banner-create">
                <p className="head-bar-title">ADD BANNER</p>
            </div>
            <div className="body-banner-create">
                <form onSubmit={handleAddBanner}>
                    <div className="image-view-upload">
                        <p><input type="file"  accept="image/*" name="image" id="file"  onChange={uploadImage} style={{ display: "none" }} /></p>
                        <p>
                            <img src={image} id="output" width="140px" height="140px" className="img-thumbnail" alt="" />
                        </p>
                        <button className="banner-image-upload" disabled="action"><label htmlFor="file" style={{ cursor: "pointer" }}><i className="fa-solid fa-file-arrow-up"></i>Upload Image</label></button>
                    </div>
                    <div className="add-banner-action">
                        <button className="banner-image-upload" type="submit">
                            <i className="fa-solid fa-plus"></i>
                            ADD
                        </button>
                        {/* <button className="reset-banner-action" type="reset">
                            <i className="fa-solid fa-arrow-rotate-left"></i>
                            <p>RESET</p>
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
        <div className="banner-list-box">
            <div className="head-bar-banner-list">
                <p className="head-bar-title">BANNER</p>
            </div>
            <div className="body-banner-list">
                <table className="banner-list">
                    <thead>
                        <tr>
                            <td>NO.</td>
                            <td>IMAGE</td>
                            <td>ACTION</td>
                        </tr>
                    </thead>
                    <tbody>
                        {banners && banners.length >= 1 ? banners.map((e, idx) => {
                            return(
                                <tr key={e.id}>
                                    <td>{idx + 1}</td>
                                    <td><img src={e.gambar_banner} alt="Banner" /></td>
                                    <td><button onClick={()=> handleDeleteBanner(e)} className="delete"><i className="fa-solid fa-trash"></i></button></td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </table>
            </div>
        </div>
        <footer>
            Admin Server Site &#169; 2022, Tokopaedi
        </footer>
    </main>
    </>
  )
}

export default Banner