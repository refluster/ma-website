import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import keyImage from '../img/key.jpg';

export default function Index () {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    console.log({isSmall});

    return (
        <Box>
            <Box sx={{
                py: 16,
                px: isSmall? 2: 8,
                typography: {
                    h2: {
                        fontWeight: 400,
                    },
                },
            }}>
                <Typography variant="h2">
                    MedicalArt
                </Typography>                
            </Box>
            <Box sx={{
                backgroundImage: `url(${keyImage})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                height: 540,
                mb: 8,
            }}>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Typography paragraph>
                    私たちは、表情から感情を、<br />
                    行動から習慣や傾向を、<br />
                    現代のメディカルデータと再定義しました。<br />
                    あなたの内面を様々な色と形で表現し、<br />
                    今日のあなたをアートに。<br />
                    ウェルネスは数値化し理解するデータから、<br />
                    表現され、感じるアートへ。
                </Typography>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Button variant="contained" color="primary" href="https://www.medicalart.gallery">
                    MedicalArtを生成する
                </Button>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Typography variant="h5">
                    INFORMATION
                </Typography>
                <Button variant="outlined" sx={{
                    my: 4,
                }} href="https://www.instagram.com/medicalart_official">
                    Instagram
                </Button>
            </Box>
            <Box sx={{
                py: 8,
                px: isSmall? 2: 8,
            }}>
                <Typography variant="h5">
                    お問い合わせ
                </Typography>
                <Button variant="outlined" sx={{
                    my: 4,
                }} href="mailto:contact@medicalart.gallery">
                    contact@medicalart.gallery
                </Button>
            </Box>
        </Box>
    )
};

