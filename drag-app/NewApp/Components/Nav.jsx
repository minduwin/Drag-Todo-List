import '../Styles/NavStyle.css';

export default function NavBar() {
    return (
        <div className='nav'>
            <div className='sideIcons'>
                <div className='controlIcons'>
                    <img src="../src/assets/menu.svg" alt="" />
                    <p>Menu</p>
                </div>
                <div className='controlIcons'>
                    <img src="../src/assets/edit.svg" alt="" />
                    <p>Edit</p>
                </div>
                <div className='controlIcons'>
                    <img src="../src/assets/done.svg" alt="" />
                    <p>Done</p>
                </div>
                <div className='controlIcons'>
                    <img src="../src/assets/delete.svg" alt="" />
                    <p>Delete</p>
                </div>
                <div className='controlIcons'>
                    <img src="../src/assets/notes.svg" alt="" />
                    <p>Notes</p>
                </div>
            </div>
            <div className='accIcon'>
                <img src="../src/assets/account.svg" alt="" />
                <p>Profile</p>
            </div>
        </div>
    )
}