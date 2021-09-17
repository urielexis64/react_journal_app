import React from "react";
import {NotesAppBar} from "./NotesAppBar";

export const NoteScreen = () => {
	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					autoComplete='off'
					type='text'
					placeholder='Some title'
					className='notes__title-input'
				/>
				<textarea placeholder='What happened today?' className='notes__textarea'></textarea>

				<div className='notes__image'>
					<img
						src='https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg'
						alt='image'
					/>
				</div>
			</div>
		</div>
	);
};
