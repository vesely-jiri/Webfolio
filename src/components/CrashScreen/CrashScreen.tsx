import "./CrashScreen.css"

function CrashScreen() {
  return (
    <div className="crash-screen">
      <div className="crash-content">
        <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
        <p className="crash-code">UNMOUNTABLE_BOOT_VOLUME</p>
        <p>If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
        <p>Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>
        <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>
        <p className="crash-info">Technical information:</p>
        <p className="crash-code">*** STOP: 0x000000ED (0x80F128D0, 0xC000009C, 0x00000000, 0x00000000)</p>
      </div>
      <div className="crash-footer">
        Beginning dump of physical memory...<br />
        Physical memory dump complete.<br />
        Contact your system administrator or technical support group for further assistance.
      </div>
    </div>
  )
}

export default CrashScreen