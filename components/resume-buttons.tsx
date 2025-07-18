"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FaFilePdf, FaFileWord } from "react-icons/fa"

const asciiLogo = `
                                                        %%#####%%
                                                  *++===============++*
                                              +===========================+%
                                           ++===============================++
                                        %=========+++#        #++===============*
                                      #+=======+#                  *+=============*
                                     +======+*                        +=============*
                                   *+=====+                             +============+
                                  +=====+                                #+===========+*
                                %+====+#                                   +============+
                               *+====*                                      +============+
                              *====+%                                        +============+
                             *====+                                           +============*
                            #====*                          %+=---=*          %+===========+%
                           #+==+*                        =-------------*       +============+
                           +==+#           %##**+***##%=-----------------*      +============#
                          ++*%    #+=-------------------------------------=     +============*
                              =--------------------------------------------=    +============+
                          *-------------------------------------------------    *============+
                        ----------------------------------------------------=   #============+%
                     +------------------------------------------------------=   #============+%
                   =--------------------------------------------------------    *============+  @%@
                 *----------------------------=++**##----------------------=    +============+  @%%@
                -----------------------+@             --------------------=     +============+  @%%%@
              #--------------------*                   =-----------------*      +============#   @%%%%@
             +-----------------=                         =-------------#       +============+     @%%%%@
            +----------------#      @@@%%%%%@@              #+=--==*          %+============#      @%%%%@
           *---------------%     @@%%%%%%%%%%%%%@                             +============+        @%%%%@
          #--------------%      @%%%%%%%%%%%%%%%%%@                          +============+%         @%%%%@
          -------------*      @%%%%%%%%%%%%%%%%%%%%@                        +=============*          @%%%%@
         *------------       @%%%%%%%%%%%%%%%%%%%%%%@                  @%%@+=============+            @%%%%@
         -----------=        @%%%%%%%%%%%%%%%%%%%%%%%@            %++===================+             @%%%%%@
        #----------=         @%%%%%%%%%%%%%%%%%%%%%%%@          #======================+               @%%%%%
        +----------          @%%%%%%%%%%%%%%%%%%%%%%%@         +=====================+*                @%%%%%@
        =---------           @%%%%%%%%%%%%%%%%%%%%%%%         +=====================+#                  %%%%%@
        =--------+            @%%%%%%%%%%%%%%%%%%%%%@        +======================+                   @%%%%@
        =--------%             %%%%%%%%%%%%%%%%%%%%@         +======================+#                  @%%%%%
        +--------               @%%%%%%%%%%%%%%%%%%@         +=======================#                  @%%%%@
        *-------=                 @@%%%%%%%%%%%%%%%%@        +======================+                  @%%%%%@
         --------                      @%%%%%%%%%%%%%@       *+=====================*                  @%%%%%@
         =-------                       %%%%%%%%%%%%%%@@      +====================+                   @%%%%%@
         %-------*                       %%%%%%%%%%%%%%%@      *+=================+                   @%%%%%@
          *-------                        @%%%%%%%%%%%%%%%@      *==============+                    @%%%%%%@
           =-------                        @%%%%%%%%%%%%%%%%@       *+++===+++                      @%%%%%%@
            =-------                        @%%%%%%%%%%%%%%%%%@@                                  @%%%%%%%@
             =-------=                       @%%%%%%%%%%%%%%%%%%%%@                             %%%%%%%%%@
               --------+                       @%%%%%%%%%%%%%%%%%%%%%@@@                    @@%%%%%%%%%%@
                +---------                      @%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@      @@@@%%%%%%%%%%%%%%
                  +----------*                    @@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@
                    #------------=*                 @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@
                       +------------------+**#%%%%%%   @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@
                           *-------------------------=    @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@
                                 +=-------------------=+     @@%%%%%%%%%%%%%%%%%%%%%%%%%%@@
                                                                  @@@@%%%%%%%%%%%%%%@@@
`;
const asciiTitle = `
                              ....
 .......              ........----:.                       .......
 .:===-.     ....     :-===...====:.                       .-====..
 ..====:.   .====:   .-===-. ......                       .-======.
  .-===-.   -====-.  .-===:  .-==-:  .-========-..       .-===-====.      :-========:.     :=========:.     ..========.
  .:+++=:  :=++++=:  :=++=.  .=++=:  .=++++++++++-.     .:+++-.-+++=      :=++++++++++-.   -+++++++++++:.   -++++++++-.
   .=+++-..=++-=++=..-+++-.  .=++=:  .=+++:...=+++:.   .:+++=. .=+++-     -+++=....=+++-.  -+++=...:=+++-. .+++=:......
   .:+++=.-+++.:+++-:=+++.   .=++=:  .++++:  .-+++-.   .+++=:   :++++:    -+++=.   :++++:  -+++=    :++++.  =+++++=:.
    .=***-+**: .=**==+**-.   .+**+:  .+**+:   -***-.  .=*************+.   -+**=.   .+**+:  -+*+=    :+**+.  ..=++****+..
    .:******=  ..+*****+.    .+**+:  .+***:   -***=.  -***************=.  -***=. ..-***+:  =***=   .-***=.  .   .:+***=.
     .=*****:   .-*****-.    .+**+:  .+***:   -***=. .****-       :****-. -*****++*****-.  =*****+******:. .**+=-=+***=.
      :+***-.    .+***+.     .+**+:  .****:   -***=..+***+.        =***+: -**********=:    =**********=..  :*********=.
                                                                          -*##+.....       =###+.....       ........
..........................................................................=###+............=###+........................
..........................................................................-***=............=***=........................
........................................................................................................................
........................................................................................................................
........................................................................................................................
`;

export function ResumeButtons() {
  useEffect(() => {
    const isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const modifier = isMacOS ? event.metaKey : event.ctrlKey;

      if (event.shiftKey && modifier) {
        if (event.key === 'P' || event.key === 'p') {
          event.preventDefault();
          handlePDFResumeDownload();
        } else if (event.key === 'D' || event.key === 'd') {
          event.preventDefault();
          handleWordResumeDownload();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    console.dir(asciiLogo);
    console.dir(asciiTitle);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handlePDFResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/MitchellWintrow_Resume.pdf";
    link.setAttribute("download", "MitchellWintrow_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleWordResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/MitchellWintrow_Resume.docx";
    link.setAttribute("download", "MitchellWintrow_Resume.docx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
      <Button
        variant="secondary"
        className="font-bold"
        onClick={handlePDFResumeDownload}
        size="sm"
      >
        <FaFilePdf className="mr-2 h-4 w-4" />
        My Resumé
      </Button>
      <Button
        variant="secondary"
        className="font-bold"
        size="sm"
        onClick={handleWordResumeDownload}
      >
        <FaFileWord className="mr-2 h-4 w-4" />
        My Resumé
      </Button>
    </div>
  )
}
